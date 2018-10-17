import React, { Component } from "react";

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: null,
            dados: null
        };
        this.handleInput = this.handleInput.bind(this);
        this.enviarTarefa = this.enviarTarefa.bind(this);
        this.cancelar = this.cancelar.bind(this);
    }
    componentWillMount() {
        this.setState({
            dados: this.props.dados
        });
    }
    handleInput(e) {
        const dados = this.state.dados;
        dados[e.target.name] = e.target.value;
        this.setState({
            dados
        });
    }

    enviarTarefa(e) {
        e.preventDefault();
        this.props.editarTarefa(this.state.dados);
    }
    cancelar() {
        this.setState({
            dados: this.props.dados
        });
        this.props.isOpen();
    }

    render() {
        return (
            <div>
                <div id="myModal" className="modal ">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    onClick={this.cancelar}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    &times;
                                </button>
                                <h4 className="modal-title">Editar tarefa</h4>
                            </div>
                            <form
                                onSubmit={e => this.enviarTarefa(e)}
                                action=""
                                method="post"
                            >
                                <div className="modal-body">
                                    <input
                                        onChange={this.handleInput}
                                        className="form-control"
                                        type="text"
                                        name="titulo"
                                        required
                                        defaultValue={this.props.dados.titulo}
                                    />
                                    <textarea
                                        onChange={this.handleInput}
                                        className="form-control"
                                        name="corpo"
                                        id=""
                                        cols="20"
                                        rows="3"
                                        required
                                        defaultValue={this.props.dados.corpo}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Atualizar
                                    </button>

                                    <button
                                        onClick={e => this.cancelar()}
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
