import React, { Component } from 'react'

export class Body extends Component {

    state={
        url:"",
    }

    url =(e)=>{
        e.preventDefault();
        this.props.OriginalUrl(this.state.url)

    }

    render() {
        return (
            <div>
            <section id="urlbox">
                 <h1>Paste the URL to be shortend</h1>
                 <form>
                     <div className = "form-group">
                         <input type="url" style={{width:"77%"}} onChange={(e)=>{this.setState({url:e.target.value})}} value={this.state.name} className="form-control" id="formGroupExampleInput" placeholder="Enter the link here"></input>
                         <button type="button" onClick={this.url} className="btn btn-success">Generate</button>
                     </div>
                 </form>
                <a href = {this.state.url}>{this.props.shorturl}</a>
                <br/>
                
                 <p className="boxtextcenter"> Url Shortner is a free tool to shorten a URL or reduce a link
                 <br></br>
                 Use our URL Shortener to create a shortened link making it easy to remember
                 </p>
                
             </section>
         </div>
        )
    }
}

export default Body

