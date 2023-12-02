import React, { Component } from "react";
import TeamMember from './TeamMember';
import membersInfo from './membersInfo';

class Team extends Component {
    constructor() {
        super();
        this.state = {
            // object
            info: [],
        }
        // عملية ربط الهاندلر مع ذيس 
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        document.getElementById("audio").volume = 0.3;
        document.getElementById("audio").play()

        // // console.log(membersInfo)
        // let newMembers = [];
        // newMembers = this.state.info
        // // console.log("before : " + newMembers.length)
        // let member = membersInfo.pop()
        // // لو مافيش عناصر ماتعملش حاجة
        // if (member != undefined) {
        //     newMembers.push(member);
        //     newMembers.reverse()
        //     this.setState({
        //         info: newMembers
        //     })
        //     // console.log("After : " + newMembers.length)
        // }

        // ------------------------- other way ---------

        let newMembers = this.state.info
        let index = Math.abs(membersInfo.length - newMembers.length)
        console.log(index);
        if (index > 0) {
            newMembers.unshift(membersInfo[index - 1])
            this.setState({
                info: newMembers,
            })
            this.newMembers = this.state.info.map(member => {
                return <TeamMember
                    key={member.id} // Unique key prop for each child
                    name={member.name}
                    img={member.img}
                    position={member.position}
                    phone={member.phone}
                    email={member.email || 'N/A'} // Fallback for missing email
                    website={member.website}
                />
            })
        }
    }
    render() {
        return (
            <div className="row">
                <div className="d-grid gap-2">
                    <button onClick={this.clickHandler} className="btn btn-primary btn-lg btn-block">Add a Legend</button>
                </div>
                {this.newMembers}
            </div>
        )
    }


}
export default Team;