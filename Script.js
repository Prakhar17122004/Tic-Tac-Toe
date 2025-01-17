let count=0;
let buttons=document.getElementsByClassName('b');
let msgCont=document.getElementsByClassName("msg-cont")[0];
let msg=document.getElementById("msg");
let newgame=document.getElementById("new");
let re=document.getElementById("reset");

for(let i=0;i<buttons.length;i++)
    {
       buttons[i].addEventListener("click",function()
       {
        if(count%2==0)
            {
                this.innerText="O";
            }
            else
            {
                this.innerText="X";
            }
            this.disabled=true;
            count++;
            checkWinner();
       }); 
    }

    const winpatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [0,3,6],
        [2,5,8],
    ]
    function reset()
    {
        enable();
        msgCont.classList.add("hide");
    }
    function disable()
    {
        for(let box of buttons)
            {
                box.disabled=true;
            }
    }
    function enable()
    {
        for(let box of buttons)
            {
                box.disabled=false;
                box.innerText="";
            }
    }
  let flag1=false;
  let flag2=false;
    function checkWinner()
    {
        for(let i=0;i<winpatterns.length;i++)
            {        
              if((buttons[winpatterns[i][0]].innerText== "X" && buttons[winpatterns[i][1]].innerText== "X" && buttons[winpatterns[i][2]].innerText=="X"))
                  {
                    console.log("Player 1 wins the match");
                    flag1=true;
                    showWinner("X");
                    return ;
                  }
                  else if((buttons[winpatterns[i][0]].innerText== "O" && buttons[winpatterns[i][1]].innerText== "O" && buttons[winpatterns[i][2]].innerText=="O"))
                  {
                    console.log("Player 2 wins the match");
                    flag2=true;
                    showWinner("O");
                    return ;
                  }
                    
            }

            if(count===9 && flag1===false && flag2===false)
                {
                    msg.innerText=`Match is Tied`;
                    msgCont.classList.remove("hide");
                    disable();  
                }
    };
   
     function showWinner(Attribute) 
    {
        msg.innerText=`Congratulations,Winner is player ${Attribute}`;
        msgCont.classList.remove("hide");
        disable();
    };
    newgame.addEventListener("click",reset);
    re.addEventListener("click",reset);





    
