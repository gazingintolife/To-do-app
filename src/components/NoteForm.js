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
            showModal: true,
            category : props.secondNote ? props.secondNote.category : ''
        }
    }
    
    componentWillMount() {
        Modal.setAppElement('body');
    }

    onModalClose = () => {
        this.setState(() => ({showModal: false}));
        this.props.onModalClose();
    }
    onChange = (value) => {
        if(value === 'todo'){
            this.setState(() => ({category: 'todo'}));
        }else if(value === 'inprogress'){
            this.setState(() => ({category: 'inprogress'}));            
        } else if(value === 'completed'){
            this.setState(() => ({category: 'completed'}));
        }
        
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
        else {
            this.setState(() => ({error: '',
        showModal: false}));
            this.props.onSubmit({
                title: this.state.title,
                createdAt: this.state.createdAt,
                category: this.state.category
            });
            console.log(this.state.createdAt);
        }
    }   
    
    render(){
        
        return (
            <div>
                <Modal 
                    isOpen = {this.state.showModal}
                    onRequestClose = {this.onModalClose}
                    contentLabel="Modal Form"
                >
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit = {this.onSubmit}>
                    { this.state.title && <button type = 'submit'>Save</button>}
                    { this.props.deleteOption && 
                    <button onClick = {this.props.handleDelete}>Delete</button>}
                    <input 
                    type = 'text' 
                    placeholder = 'ToDO'
                    value = {this.state.title}
                    onChange = {this.onTitleChange}
                    />
                    Select One
                    <RadioGroup onChange={ this.onChange } horizontal >
                    <RadioButton value="todo" >
                      ToDo
                    </RadioButton>
                    <RadioButton value="inprogress">
                      In-Progress
                    </RadioButton>
                    <RadioButton value="completed">
                      Completed
                    </RadioButton>
                  </RadioGroup> 
                    
                </form>
                </Modal>
                
            </div>
        );
    }
}