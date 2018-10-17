import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            dados: {
                titulo: "",
                corpo: ""
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.enviarTarefa = this.enviarTarefa.bind(this);
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
        this.props.adicionarTarefa(this.state.dados);
        e.target.titulo.value = "";
        e.target.corpo.value = "";
    }
    render() {
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    <form
                        onSubmit={e => this.enviarTarefa(e)}
                        action=""
                        method="POST"
                        role="form"
                    >
                        <legend>Criar nova tarefa</legend>
                        <div className="form-group">
                            <label htmlFor="">Título</label>
                            <input
                                // onInput={this.handleInput}
                                onChange={this.handleInput}
                                name="titulo"
                                type="text"
                                className="form-control"
                                id=""
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="textarea" className="control-label">
                                Tarefa
                            </label>
                            <div className="">
                                <textarea
                                    // onInput={this.handleInput}
                                    onChange={this.handleInput}
                                    name="corpo"
                                    id="textarea"
                                    className="form-control"
                                    rows="3"
                                    required="required"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
