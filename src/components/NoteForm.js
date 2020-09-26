import React from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default class NoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.secondNote ? props.secondNote.title : '',
            createdAt : moment().format("hh:mm A MMM DD"),
            error: '',
            category : props.secondNote ? props.secondNote.category : ''
        }
    }
    
    onChange = (value) => {
        this.setState(() => ({category: value}));        
    }
    
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    }


    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title){
            this.setState(() => ({error: 'Please add a note'}));
        }
        else if(!this.state.category){
            this.setState(() => ({error: 'Please Select a Category'}));
        }
        else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                title: this.state.title,
                createdAt: this.state.createdAt,
                category: this.state.category
            });
        }
    }   
    
    render(){
        
        return (
            <div className="content-container">                
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit = {this.onSubmit}>
                    <div className="input-grp">
                        <div className="btn-inbox">
                        <input className="text-input"
                             type = 'text' 
                             placeholder = 'ToDO'
                             rows= {4}
                             value = {this.state.title}
                             onChange = {this.onTitleChange}      
                        />
                        <div className="btn-grp">
                        <button className="button__edit" type = 'submit'>Save</button>
                            { this.props.deleteOption && 
                            <button className="button__edit" onClick = {this.props.handleDelete}>Delete</button>}
                        </div>
                        </div>
                    </div>    
                    <p className ="radio__select">Select One</p>
                        <div className="radio-btn">
                        <RadioGroup onChange={ this.onChange} horizontal>
                        <RadioButton value="todo">
                          To Do
                        </RadioButton>
                        <RadioButton value="inprogress">
                            In Progress
                        </RadioButton>
                        <RadioButton value="completed">
                          Completed
                        </RadioButton>
                        </RadioGroup>
                        </div>               
                </form>
                
            </div>
        );
    }
}