import React, { Components } from 'react';

class App extends Components {
    construction(props){
        super(pros);
        this.state = {
            studentName:"bui son tung"
        }
    }
handleChange = (ev)=>{
    let ten = ev.target.name;
    let gtri= ev.target.value
    this.setState({
        [ten]:gtri
    }

    )
}

  render() {
    return (
      <div>
        <form>
            <div>
                <label>go va ten</label>
                <input name = 'sutdentName'value={this.studentName}
                    onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
