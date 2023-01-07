import React, {useState, useEffect} from 'react'

function Heading({value, headingType}) {

  const REMOVE_EXTRA_SPACES = /\s+/g;
  const INLINE_CODE = /^`[\w\W\s]+`$/;
  const FONT_WEIGHT = /^\*\*[\w\W\s]+\*\*$/;
  const ITALICIZE = /^\*[\w\W]+\*$/;

  const INLINE_CODE_FIRST = /^`[^`]$/;
  const INLINE_CODE_LAST = /[^`]`$/;

  const FW_FIRST = /^\*\*[\w\W]+$/;
  const FW_END = /[\w\W]+\*\*$/;
//   const INLINE_CODE = /(`\w`|\*\w\*)/g;
  const [arrayOfParagraphs, setArrayOfParagraphs] = useState([]);
  
  useEffect(() => {

    let unfilteredArray = String(value).replace(REMOVE_EXTRA_SPACES, ' ').split(REMOVE_EXTRA_SPACES);

    console.log("UNFILTERED ARRAY: " + unfilteredArray); 
    let filteredArray = [];

    let toConcatenate = '';
    let toBold = '';

    unfilteredArray.forEach(item => {
            
            if (item.match(FONT_WEIGHT)) {
                filteredArray.push(item);
            }
            else if (item.match(INLINE_CODE)) {
                filteredArray.push(item);
            }
            else {
            if (toConcatenate && !String(item).match(INLINE_CODE_FIRST)
                && !String(item).match(INLINE_CODE_LAST)) {
                toConcatenate += item + " ";
                    // return partOfParagraph + " ";
                //    console.log("toconcatenate : " + toConcatenate);

                //    if (item === unfilteredArray[unfilteredArray.length - 1]) {
                //     toConcatenate += item;
                //     const temp = toConcatenate;
                //     toConcatenate = '';
                //     filteredArray.push(temp);
                //    }
            }
            else if (item[0] === '`' && item[item.length - 1] !== '`') {
                toConcatenate += item + " ";
                // console.log("toconcatenate FIRST: " + toConcatenate);
            }
            else if (String(item).match(INLINE_CODE_LAST)) {
                toConcatenate += item;
                const temp = toConcatenate;
                toConcatenate = '';
                filteredArray.push(temp);
            }
            else if (toBold && !String(item).match(FW_FIRST)
                && !String(item).match(FW_END)) {
                toBold += item + " ";
            }
            else if (item.match(FW_FIRST)) {
                console.log("FW FIRST TO BOLD 1: " + item.match(FW_FIRST))
                toBold += item + " ";
                filteredArray.push(item)
            }
            else if (item.match(FW_END)) {
                toBold += item;
                const temp = toBold;
                toBold = '';
                filteredArray.push(temp);
            }
            else {
                filteredArray.push(item);
            }
        }
    })

    console.log("FILTERED ARRAY: " + filteredArray)
    // setArrayOfParagraphs(String(value).replace(REMOVE_EXTRA_SPACES, ' ').split(REMOVE_EXTRA_SPACES));
    setArrayOfParagraphs(filteredArray);
  }, [value]) 

  let codeWithSpaces = '';
  return (
    <>
        {headingType === '1' ? <h1 className="fw-bold">{String(value).replace(REMOVE_EXTRA_SPACES, ' ').slice(1)}</h1>
            : headingType === '2' ? <h2>{String(value).replace(REMOVE_EXTRA_SPACES, ' ').slice(2)}</h2>
            : <p id="hp">
                {
                    arrayOfParagraphs.map((partOfParagraph, key) => {

                            if (String(partOfParagraph).match(INLINE_CODE)) {

                                return (<>
                                <code key={key} className="bg-black text-white p-1 mx-1">              {partOfParagraph.slice(1, partOfParagraph.length - 1)}
                                </code>
                                <span></span>
                                </>)
                            }
                            // else if (codeWithSpaces && !String(partOfParagraph).match(INLINE_CODE_FIRST)
                            //     && !String(partOfParagraph).match(INLINE_CODE_LAST)) {
                            //         codeWithSpaces += partOfParagraph + " ";
                            //         // console.log(codeWithSpaces);
                            //         // return partOfParagraph + " ";
                            // }
                            // else if (String(partOfParagraph).match(INLINE_CODE_FIRST)) {
                            //     codeWithSpaces += partOfParagraph + " ";
                            //     // console.log(codeWithSpaces);
                            //     // return partOfParagraph + " ";
                            //     // console.log(partOfParagraph[0] + " : " + partOfParagraph[partOfParagraph.length - 1])
                            // }
                            // else if (String(partOfParagraph).match(INLINE_CODE_LAST)) {
                            //     codeWithSpaces += partOfParagraph + " ";
                            //     const temp = codeWithSpaces;
                            //     codeWithSpaces = '';
                            //     // console.log("TEMP: " + temp);
                                
                            //     return (<>
                            //     <code key={key} className="bg-black text-white p-1 mx-1">              {temp.slice(1, temp.length - 2)}
                            //     </code>
                            //     <span></span>
                            //     </>)
                            // }
                            
                            else if (String(partOfParagraph).match(FONT_WEIGHT)) {
                                return (<>
                                
                                    <span key={key} className="fw-bold mx-1">
                                        {partOfParagraph.slice(2, partOfParagraph.length - 2)}
                                    </span>
                                </>)
                            }
                            else if (String(partOfParagraph).match(ITALICIZE)) {
                                return (<>

                                    <em>
                                        <span key={key} className="font-italic mx-1">
                                            {partOfParagraph.slice(1, partOfParagraph.length - 1)}
                                        </span>
                                    </em>
                                </>)
                            }
                            else {
                                return partOfParagraph + " ";
                            }
                        
                    })
                }
            </p>
        }
        {(headingType === '1' || headingType === '2') && <hr></hr>}
    </>
  )
}

export default Heading