import React from "react";

function Header(){
    // const style = {
    //         color : "red",
    //         fontSize: "50px",
    //         backgroundColor: "black",
    //         padding: "20px"
    // }
    let title = ""
    const user = "programmer"
    if(user==="programmer"){
        title = "programming is my life"
    }else{
        title = "I wish to be Programmer"
    }
    return(
        // in line style
        // بيكتب كأنه اوبجكت
        // style={style}
        // class -> error      className -> correct
        <div className="rounded bg-primary p-3">
            <h1 className="text-white ">Hello World</h1>
            <p className="text-white">{title.toString()}</p>
            {/* <h2 className="text-white">5+6 is {5+6}</h2> */}
            {/* <h2 className="text-white">5*6 is {5*6}</h2> */}

        </div>
        
    );
}
export default Header;