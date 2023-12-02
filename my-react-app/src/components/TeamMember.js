import React,{Component} from "react";
class TeamMember extends Component {
    
    render(){
        return (
            <div className="col-md-4  ">
                <div className="card h-100">
                    <div className="card-header">
                        <img className="rounded mx-auto d-block " src={this.props.img} alt="image" style={{width:'100%'}}></img>
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.position}</h5>
                        <div>{this.props.phone}</div>
                        <div>{this.props.email?this.props.email:"has no email"}</div>
                        <div>{this.props.website}</div>
                    </div>
    
                </div>
            </div>
        );
    }
}
export default TeamMember;