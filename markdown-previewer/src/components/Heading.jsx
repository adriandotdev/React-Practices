import React, {useState, useEffect} from 'react'


function Heading({value, headingType}) {

  const REMOVE_EXTRA_SPACES = /\s+/g; // Pattern to detect spaces.
  const INLINE_CODE = /^`[\w\W\s]+`$/;
  const FONT_WEIGHT = /^\*\*[\w\W\s]+\*\*$/;
  const ITALICIZE = /^\*[\w\W]+\*$/;

  const INLINE_CODE_FIRST = /^`[^`]$/;
  const INLINE_CODE_LAST = /[^`]`$/;

  const FW_FIRST = /^\*\*[\w\W\s]+$/;
  const FW_END = /[\w\W]+\*\*$/;

  const IT_FIRST = /^\*[\w\W]+$/;
  const IT_LAST = /[\w\W]+\*$/;

  const [arrayOfParagraphs, setArrayOfParagraphs] = useState([]);
  
  useEffect(() => {

    let unfilteredArray = String(value).replace(REMOVE_EXTRA_SPACES, ' ').split(REMOVE_EXTRA_SPACES);

    console.log("UNFILTERED ARRAY: " + unfilteredArray); 
    let filteredArray = [];
    let temporaryArray = [];
    let toConcatenate = '';
    let toBold = '';
    let toItalicize = '';

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
                    filteredArray.push(item)
                    temporaryArray.push(item);
                }
                else if (item.match(FW_FIRST)) {
                    console.log("FW FIRST TO BOLD 1: " + item.match(FW_FIRST))
                    toBold += item + " ";
                    filteredArray.push(item)
                    temporaryArray.push(item);
                }
                else if (item.match(FW_END)) {
                    toBold += item;
                    console.log("FW FIRST TO BOLD 2: " + item.match(FW_END))
                    const temp = toBold;
                    toBold = '';
                    
                    temporaryArray.forEach(elem => {

                        let index = filteredArray.indexOf(elem);

                        filteredArray = [...filteredArray.slice(0,index), ...filteredArray.slice(index + 1, filteredArray.length - 1)];
                    })
                    filteredArray.push(temp);
                }
                else if (toItalicize && !String(item).match(IT_FIRST)
                    && !String(item).match(IT_LAST)) {
                    toItalicize += item + " ";
                    filteredArray.push(item)
                    temporaryArray.push(item);
                }
                else if (item.match(IT_FIRST)) {
                    // console.log("FW FIRST TO BOLD 1: " + item.match(FW_FIRST))
                    toItalicize += item + " ";
                    filteredArray.push(item)
                    temporaryArray.push(item);
                }

                else if (item.match(IT_LAST)) {
                    toBold += item;
                    console.log("FW FIRST TO BOLD 2: " + item.match(FW_END))
                    const temp = toBold;
                    toBold = '';
                    
                    temporaryArray.forEach(elem => {

                        let index = filteredArray.indexOf(elem);

                        filteredArray = [...filteredArray.slice(0,index), ...filteredArray.slice(index + 1, filteredArray.length - 1)];
                    })
                    filteredArray.push(temp);
                }
                else {
                    filteredArray.push(item);
                }
            }
    })

    console.log("TEMPORARY ARRAY: " + temporaryArray);
    console.log("FILTERED ARRAY: " + filteredArray)
    // setArrayOfParagraphs(String(value).replace(REMOVE_EXTRA_SPACES, ' ').split(REMOVE_EXTRA_SPACES));
    

    setArrayOfParagraphs(filteredArray);
  }, [value]) 

  let codeWithSpaces = '';

  function RemoveChildElements() {

    const Root = document.getElementById('preview');

    Root.innerText = '';
  }
  
  return (
    <>
        {headingType === '1' ? <><h1 className="fw-bold">{String(value).replace(REMOVE_EXTRA_SPACES, ' ').slice(1)}</h1>
        <hr></hr></>
            : headingType === '2' ? <><h2>{String(value).replace(REMOVE_EXTRA_SPACES, ' ').slice(2)}</h2><hr></hr></>
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
    </>
  )
}

export default Heading