       # Facebook Personal Profile Post Editor(Extension)
## About The Project
Facebook is  one of the most used social media in today’s world .People do post emotional as well important statements over their. So ,when they do post this kind of statement from their personal profile, they feel the need of editor to prioritize  a particular word or to express their emotion in a more convenient way. This project is all about adding an editor to the personal profile timeline post.</br>
Whenever user going to write some post on Facebook and open the create post popup ,some script will be injected to the facebook DOM . The script will allow to append a hidden toolbar inside that pop up box .Once user select a text, this toolbar will be visible which has button like bold, italic, cursive outline underline strikethrough small ,capital .All this features are explained in below-</br>
### **Bold**: 
Pressing bold over a selected text, will convert normal character to bold. If  some character remains bold and some remains normal ,then selecting the whole text & pressing bold will lead the bold character to normal and normal to bold.
Example- </br>
### *Italic*:
 it will make the selected text to italic. Like the bold , it will also make text Italic and nonItalic accordingly.</br>
Like the Bold and Italic ,the other features like cursive , outline, strikethrough ,underline will change the character accordingly.</br>
### **small**: 
small will make capital  character to small . Though it will only work  for normal character. It is yet to implement for the other kind of character(like bold,Italic) .Pressing the button over a small character will not change it’s state .For that Capital button is there.</br>
### **CAPITAL** : 
Like the small, it will also work for normal character .This feature is also yet to implement for the other character and pressing this button over a capital character will not change it’s state .</br>
### **Combing multiple features** : 
Though combining multiple features is yet to implement, But strikethrough or underline can be combined with any feature . As example, bold-underline , cursive-underline ,italic-underline or bold-strikethrough, cursive -strikethrough etc will work. For other features, it will not work properly. As example, for bold-Italic, the bold will be totally overwritten by Italic</br>
#### **Example**:
1.	𝗔𝗕𝗖𝗗 ->𝗔̶𝗕̶𝗖̶𝗗̶  (working properly bold-strikethrough)
2.	𝗔𝗕𝗗-> 𝔸𝔹𝔻(Bold characters are overwritten by outline character) 
### Built With:
*	Java Script
*	JQuery
*	CSS
###  Getting Started
    #### Prerequisite:
        *Chrome browser
      Installation:
###	Github link: https://github.com/Rammoy123/FB_INJECT.git
*   Download the zip folder  in your local machine using the above link
*   Extract it and open chrome browser
* Go to  option->More tools->Extensions->Load Unpacked
* Select the extract folder and it will start working
### Loom video Link: 
•	https://www.loom.com/share/f64d3629b6e549adbc7d924f18db40a0
### Contact: 
•	rammoymandal@gmail.com
### Acknowledgements:
* arrive.js    v2.4.1
* https://github.com/uzairfarooq/arrive
* MIT licensed
