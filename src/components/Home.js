import React, {StrictMode, useState} from 'react'
import './Home.css';


export default function Home(props) {
    const [text, setText] = useState("");
    const onChange = (event)=>{
        setText(event.target.value)
    }
    const scm = ()=>{
        var s = "";
        for(var i=0; i<text.length;i++)
        {
            if(text[i]!=" ")
            {
            if(i%2==1)
            {s = s+text[i].toLowerCase();}
            else if(i%2==0)
            {s = s+text[i].toUpperCase();}
            }
            else
            {s = s+" "}
        }
        setText(s);
    }
    const jj = ()=>{
        var s = "";
        for(var i =0; i<text.length;i++)
        {
            if(text[i]!=" ")
            {
                s = s+text[i]
            }
            else
            continue;
        }
        setText(s);
    }

    const rev = ()=>{
        var text2 = text+" ";
        var s="";
        var s2="";

        for(var i = 0;i<text2.length;i++)
        {
            if(text2[i]!=" ")
            {
             s = text2[i]+s;
            }
            else
            {
                s2 = s2 + s +" ";
                s = "";
            }
        }
        setText(s2);
    }

    const srev = ()=>{
        var s="";
        for(var i = 0;i<text.length;i++)
        {
            if(text[i]!=" ")
            {
             s = text[i]+s;
            }
            else
            {s = " "+s}
        }
        setText(s);
    }

    const inn = ()=>{
        var s="";
        for(var i = 0;i<text.length;i++)
        {
            if(text[i]!=" ")
            {
             s = s+text[i]+"*";
            }
            else
            {s = " "+s}
        }
        setText(s);
    }

    const copied = () => {
      document.getElementById("cpd").style.display = "block";
      document.getElementById("cpd").style.opacity = 0;
      var opacity = parseFloat(document.getElementById("cpd").style.opacity);
      var a = setInterval(() => {
        opacity = opacity + 0.01;
        document.getElementById("cpd").style.opacity = opacity.toString();
      }, 10);
      var c = 0;
      setTimeout(() => {
        clearInterval(a);
        var b = setInterval(() => {
          c = b;
          opacity = opacity - 0.1;
          document.getElementById("cpd").style.opacity = opacity.toString();
        }, 100);
      }, 2000);
      setTimeout(() => {
        clearInterval(c);
        document.getElementById("cpd").style.display = "none";
      }, 3000);
    };

  return (
    <>
    <div id='msgd'>
        <textarea name="" id="msg" value={text} onChange={onChange} placeholder='Enter some text to style'></textarea>
    </div>

    <div id="copyd">
        <img src={require("../resources/copy2.png")} id = "copy" alt="" onClick={copied}/>
    </div>

    <div id="cpd">
        Text has been copied!
    </div>

    <div id="typedd">
        <div className='typed'>
            <button className='type' id='scm' onClick={scm}>Sarcasm</button>
        </div>

        <div className='typed'>
            <button className='type' id='jj' onClick={jj}>JustJoin</button>
        </div>

        <div className='typed'>
            <button className='type' id='rev' onClick={rev} >Reverse</button>
        </div>

        <div className='typed'>
            <button className='type' id='srev' onClick={srev}>EndStart</button>
        </div>

        <div className='typed'>
            <button className='type' id='ins' onClick={inn}>Insert</button>
        </div>

    </div>

    </>
  )
}
