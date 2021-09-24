let html = `
<div class="wrapper">


        <div class="btn bold">𝗕</div>
        <div class="btn italic">𝑰</div>
        <div class="btn cursive">𝓒</div>
        
        <div class="btn outline">𝔽</div> 
        <div class="btn underline">U̲</div>
        <div class="btn strikeThrough">S̶</div>
        <div class="btn smallCaps">Sᴍᴀʟʟ</div> 
        <div class="btn capitalCaps">𝔽</div> 
        
       
</div>    
</div>
`

$('body').arrive(`[aria-label="Emoji"]`, function (e) {
  $(e)
    .parent()
    .append(html)
})

const all_characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡!@#$%'
//𝔸𝔹𝔻𝔼𝔽𝔾𝕀𝕁𝕂𝕃𝕄𝕆𝕊𝕋𝕌𝕍𝕎𝕏𝕐
const normal_character =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
const normal_character_array = [...normal_character]

const textFormatOption = type => {
  console.log('here clicked')
  console.log('dfgdfg', selectedObj, selectedObj.toString())
  restoreSelection(selectedObj)
  console.log('dan1', selectedObj, selectedObj.toString())
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = document.getSelection().toString()
    var tempArray = [...stringSelected]
    if (stringSelected) {
      var reformatedText
      console.log(stringSelected)
      reformatedText = ''
      let p
      switch (type) {
        case 0:
          for (let i = 0; i < tempArray.length; i++) {
            reformatedText += normalToBold(
              specialToNormal([...all_characters], tempArray[i], type)
            )
          }
          break
        case 1:
          for (let i = 0; i < tempArray.length; i++) {
            reformatedText += normalToItalic(
              specialToNormal([...all_characters], tempArray[i], type)
            )
          }
          break
        case 2:
          for (let i = 0; i < tempArray.length; i++) {
            reformatedText += normalToCursive(
              specialToNormal([...all_characters], tempArray[i], type)
            )
          }
          break
        case 3:
          // for (let i=0; i < tempArray.length; i++){
          //  // console.log(reformatedText,"lollll")
          //   reformatedText += strikeThrough(tempArray[i],type)
          //   console.log(reformatedText,"after concat")
          // }
          // reformatedText = strikeThrough(tempArray,822);
          // break;

          for (let i = 0; i < tempArray.length; i++) {
            reformatedText += normalTooutline(
              specialToNormal([...all_characters], tempArray[i], type)
            )
          }
          break
        case 4:
          reformatedText = strikeThrough(tempArray, 818)
          break
        case 5:
          reformatedText = strikeThrough(tempArray, 822)
          break
        case 6:
          for (let i = 0; i < tempArray.length; i++) {
            reformatedText += upperTosmall(
              specialToNormal([...all_characters], tempArray[i], type)
            )
          }
          break
        case 7:
          for (let i = 0; i < tempArray.length; i++) {
            reformatedText += smallToupper(
              specialToNormal([...all_characters], tempArray[i], type)
            )
          }
          break

        // for (let i=0; i < tempArray.length; i++){
        //   reformatedText += normalTooutline(specialToNormal([...all_characters],tempArray[i],type));
        // }
        // break;

        // for (let i=0; i < tempArray.length; i++){
        //   reformatedText += upperTosmall(specialToNormal([...all_characters],tempArray[i],type));
        // }
        // break;

        // case 4:
        //   for (let i=0; i < tempArray.length; i++){
        //     reformatedText += upperTosmall(specialToNormal([...all_characters],tempArray[i],type));
        //   }
        //   break;
        // case 5:
        //     for (let i=0; i < tempArray.length; i++){
        //       reformatedText += normalToupsidedown(specialToNormal([...all_characters],tempArray[i],type));
        //     }
        // //     break;
        //  case 6:
        //   for (let i=0; i < tempArray.length; i++){
        //     reformatedText += normalTooutline(specialToNormal([...all_characters],tempArray[i],type));
        //   }
        //   break;

        default:
          for (let i = 0; i < tempArray.length; i++) {
            console.log(reformatedText, 'lollll123')
            reformatedText += specialToNormal(
              [...all_characters],
              tempArray[i],
              type
            )
          }
      }

      console.log(reformatedText, 'reformation done')

      const blob = new Blob([reformatedText], {
        type: 'text/plain'
      })
      let cpData = [
        new ClipboardItem({
          'text/plain': blob
        })
      ]

      navigator.clipboard.write(cpData).then(
        function () {
          restoreSelection(selectedObj)
          setTimeout(() => {
            console.log('pasting')
            document.execCommand('paste')
          }, 500)
        },
        function (error) {
          console.error('Unable to paste the data. Error:')
          console.log(error)
        }
      )
    }
  }
}

function specialToNormal (inputArray, element, type) {
  let diff
  let alphabet = ''
  let alpha_index = ''
  if (inputArray.includes(element)) {
    alpha_index = inputArray.indexOf(element)
    console.log(inputArray[alpha_index].codePointAt(0), 'rammoy')

    if (alpha_index < 62) {
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - 0
      )
      console.log(alphabet)
      return alphabet
      // converting 𝗔 to A - a
    } else if (alpha_index >= 62 && alpha_index < 88) {
      if (type === 0) {
        diff = 0
      } else {
        diff = 120211
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
    } else if (alpha_index >= 88 && alpha_index < 114) {
      if (type === 0) {
        diff = 0
      } else {
        diff = 120205
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
    } else if (alpha_index >= 114 && alpha_index < 124) {
      if (type === 0) {
        diff = 0
      } else {
        diff = 120764
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
      // converting 𝗔 to A - a
    } else if (alpha_index >= 124 && alpha_index < 150) {
      if (type === 1) {
        diff = 0
      } else {
        diff = 120263
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
    } else if (alpha_index >= 150 && alpha_index < 176) {
      if (type === 1) {
        diff = 0
      } else {
        diff = 120257
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
      // converting 𝗔 to A - a
    } else if (alpha_index >= 176 && alpha_index < 202) {
      if (type === 2) {
        diff = 0
      } else {
        diff = 119951
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
    } else if (alpha_index >= 202 && alpha_index < 228) {
      if (type === 2) {
        diff = 0
      } else {
        diff = 119945
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
    } else if (alpha_index >= 228 && alpha_index < 254) {
      if (type === 3) {
        diff = 0
      } else {
        diff = 120055
      }
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
    } else if (alpha_index >= 254 && alpha_index < 280) {
      console.log(alpha_index, 'testing____')
      if (type === 3) {
        diff = 0
      } else {
        diff = 120049
      }
      console.log('testing the inner')
      console.log(String.fromCodePoint(inputArray[alpha_index].codePointAt(0)))
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      console.log(alphabet, 'its for lower')
      return alphabet
    } else if (alpha_index >= 280 && alpha_index < 290) {
      if (type === 3) {
        diff = 0
      } else {
        diff = 120744
      }
      console.log('testing the inner')
      console.log(String.fromCodePoint(inputArray[alpha_index].codePointAt(0)))
      alphabet = String.fromCodePoint(
        inputArray[alpha_index].codePointAt(0) - diff
      )
      return alphabet
    }
  } else {
    alphabet = element
    return alphabet
  }
}

function normalToBold (norAlpha) {
  let alphabet = ''
  let alpha_index = ''
  if (normal_character_array.includes(norAlpha)) {
    alpha_index = normal_character_array.indexOf(norAlpha)
    if (alpha_index < 26) {
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120211)
      return alphabet
    } else if (alpha_index >= 26 && alpha_index < 52) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120205)
      return alphabet
    } else if (alpha_index >= 52 && alpha_index < 62) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120764)
      return alphabet
    }
  } else {
    return specialToNormal([...all_characters], norAlpha, 9)
  }
}

function normalToItalic (norAlpha) {
  let alphabet = ''
  let alpha_index = ''
  if (normal_character_array.includes(norAlpha)) {
    alpha_index = normal_character_array.indexOf(norAlpha)
    if (alpha_index < 26) {
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120263)
      return alphabet
    } else if (alpha_index >= 26 && alpha_index < 52) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120257)
      return alphabet
    } else if (alpha_index >= 52 && alpha_index < 62) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 0)
      return alphabet
    }
  } else {
    return specialToNormal([...all_characters], norAlpha, 9)
  }
}

function normalToCursive (norAlpha) {
  let alphabet = ''
  let alpha_index = ''
  if (normal_character_array.includes(norAlpha)) {
    alpha_index = normal_character_array.indexOf(norAlpha)
    if (alpha_index < 26) {
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 119951)
      return alphabet
    } else if (alpha_index >= 26 && alpha_index < 52) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 119945)
      return alphabet
    } else if (alpha_index >= 52 && alpha_index < 62) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 0)
      return alphabet
    }
  } else {
    return specialToNormal([...all_characters], norAlpha, 9)
  }
}
function upperTosmall (norAlpha) {
  let alphabet = ''
  let alpha_index = ''
  if (normal_character_array.includes(norAlpha)) {
    alpha_index = normal_character_array.indexOf(norAlpha)

    if (alpha_index < 26) {
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 32)
      return alphabet
    } else {
      return specialToNormal([...all_characters], norAlpha, 9)
    }
  }
}
function normalToupsidedown (norAlpha) {
  let alphabet = ''
  let alpha_index = ''
  if (normal_character_array.includes(norAlpha)) {
    alpha_index = normal_character_array.indexOf(norAlpha)

    if (alpha_index < 26) {
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 8639)
      return alphabet
    }
  }
}
function normalTooutline (norAlpha) {
  let alphabet = ''
  let alpha_index = ''
  if (normal_character_array.includes(norAlpha)) {
    alpha_index = normal_character_array.indexOf(norAlpha)
    if (alpha_index < 26) {
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120055)
      return alphabet
    } else if (alpha_index >= 26 && alpha_index < 52) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120049)
      return alphabet
    } else if (alpha_index >= 52 && alpha_index < 62) {
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120744)
      return alphabet
    }
  } else {
    return specialToNormal([...all_characters], norAlpha, 9)
  }
}

// function strikeThrough(string,t){
//   if(string==='\u0336')
//   { console.log(string,"basab")
//   console.log((string.replace(/[\u0336]/g, '')),"testing purpose");
//    return (string.replace(/[\u0336]/g, ''))

//     console.log(string,"its testing");
//   }
//   else{
//   console.log(string,"striketh do")
//   return string
//   .split('')
//   .map(char => char + '\u0336')
//   .join('')
//   }
// }
function strikeThrough (text, charCode) {
  var iterator = 0
  while (iterator < text.length) {
    if (text[iterator] != String.fromCharCode(charCode)) {
      if (text[iterator + 1] != String.fromCharCode(charCode)) {
        text.splice(iterator + 1, 0, String.fromCharCode(charCode))
        iterator = iterator + 2
      } else {
        text.splice(iterator + 1, 1)
        iterator = iterator + 1
      }
    } else {
      text.splice(iterator, 1)
      iterator = iterator + 0
    }
  }
  var ntext = text.join('')
  return ntext
}

$(document).on('click', '.bold', () => {
  textFormatOption(0)
})

$(document).on('click', '.italic', () => {
  textFormatOption(1)
})
$(document).on('click', '.cursive', () => {
  textFormatOption(2)
})
$(document).on('click', '.outline', () => {
  textFormatOption(3)
})
$(document).on('click', '.underline', () => {
  textFormatOption(4)
  // $(document).on("click", ".smallCaps", () => {
  //   textFormatOption(4);
})
$(document).on('click', '.strikeThrough', () => {
  textFormatOption(5)
})
$(document).on('click', '.smallCaps', () => {
  textFormatOption(6)
})
$(document).on('click', '.capitalCaps', () => {
  textFormatOption(7)
})

// $(document).on("click", ".strikeThrough", () => {
//   textFormatOption(4);
// });
// $(document).on("click", ".upsideDown", () => {
//   textFormatOption(5);
// });
// $(document).on("click", ".underline", () => {
//   textFormatOption(6);
// });
// $(document).on("click", ".outline", () => {
//   textFormatOption(7);
// });
// $(document).on("click", ".smallCaps", () => {
//   textFormatOption(8);
// });

// $(document).on("click", ".make_it_bold", () => {
//   textFormatOption(0)
// });

// $(document).on("click", ".make_it_italic", () => {
//   textFormatOption(1);
// });

// $(document).on("click", ".make_it_cursive", () => {
//   textFormatOption(2);
// });

function saveSelection () {
  if (window.getSelection) {
    sel = window.getSelection()
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0)
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange()
  }
  return null
}

function restoreSelection (range) {
  if (range) {
    if (window.getSelection) {
      sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    } else if (document.selection && range.select) {
      range.select()
    }
  }
}

var selectedObj = ''

$(document).on('selectionchange', function (e) {
  if ($(`[aria-label="Post"]`).length) {
    document.onmouseup = function () {
      if (
        document.getSelection().toString().length !== 0 &&
        document.getSelection().toString() != ''
      ) {
        document.getElementsByClassName('wrapper')[0].style.visibility =
          'visible'
      } else {
        document.getElementsByClassName('wrapper')[0].style.visibility =
          'hidden'
      }
    }
    var stringSelected = window.getSelection().toString()
    if (stringSelected) {
      selectedObj = saveSelection()
    }
  }
})
