import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./componentes/formCriarNovaTarefa";
import Tarefa from "./componentes/tarefa";
import Modal from "./componentes/modal";

class App extends Component {
    constructor() {
        super();
        this.state = {
            modal: {
                isOpen: false,
                dados: null
            },
            isLoading: true,
            dados: []
        };
        this.openModal = this.openModal.bind(this);
        this.lerTarefas = this.lerTarefas.bind(this);
        this.editarTarefa = this.editarTarefa.bind(this);
        this.deleteTarefa = this.deleteTarefa.bind(this);
    }
    componentWillMount() {
        return this.lerTarefas();
    }
    lerTarefas() {
        this.setState({
            isLoading: true
        });
        fetch("api/tarefas/")
            .then(res => res.json())
            .then(dados => {
                //atualiza o state com os dados recebidos
                this.setState(
                    {
                        dados
                    },
                    //se recebeu os dados então 'loading' torna-se false
                    () => {
                        this.setState({
                            isLoading: false
                        });
                    }
                );
            });
    }
    adicionarTarefa(dados) {
        const tarefa = new FormData();
        tarefa.append("titulo", dados.titulo);
        tarefa.append("corpo", dados.corpo);
        fetch("api/tarefas/create", {
            method: "POST",
            body: tarefa
        }).then(res => {
            if (res.status == 200 && res.ok) {
                this.lerTarefas();
            }
        });
    }
    editarTarefa(dados) {
        fetch(
            `api/tarefas/${dados.id}?titulo=${dados.titulo}&corpo=${
                dados.corpo
            }`,
            {
                method: "PUT"
            }
        )
            .then(res => res.json())

            .then(dados => {
                this.setState({
                    dados
                });
                const modal = this.state.modal;
                modal.isOpen = false;
                modal.dados = null;
                this.setState({
                    modal
                });
            });
    }

    deleteTarefa(id) {
        fetch(`api/tarefas/${id}/delete`, {
            method: "DELETE"
        });

        const dados = this.state.dados.filter(t => t.id != id);
        this.setState({
            dados
        });
    }
    openModal(d) {
        const modal = this.state.modal;
        modal.isOpen = true;
        modal.dados = d;
        this.setState({
            modal
        });
    }
    render() {
        const loading = (
            <div className="loading">
                <i className="fa fa-spinner" />
            </div>
        );
        return (
            <React.Fragment>
                <div className="container">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                        <Form adicionarTarefa={e => this.adicionarTarefa(e)} />
                        <div className="page-header">
                            <h1>Minhas tarefas</h1>
                            <button
                                onClick={() => this.lerTarefas()}
                                type="button"
                                className="btn btn-xs "
                            >
                                Atualizar
                            </button>
                        </div>

                        {this.state.isLoading
                            ? loading
                            : this.state.dados.map(tarefa => (
                                  <Tarefa
                                      key={tarefa.id}
                                      titulo={tarefa.titulo}
                                      corpo={tarefa.corpo}
                                      openModal={() =>
                                          this.openModal({
                                              id: tarefa.id,
                                              titulo: tarefa.titulo,
                                              corpo: tarefa.corpo
                                          })
                                      }
                                      deleteTarefa={() =>
                                          this.deleteTarefa(tarefa.id)
                                      }
                                  />
                              ))}
                        {this.state.dados.length < 1 &&
                        this.state.isLoading === false ? (
                            <div className="panel">
                                Nenhuma tarefa publicada!
                            </div>
                        ) : null}
                    </div>
                    {this.state.modal.isOpen ? (
                        <Modal
                            isOpen={() => {
                                const modal = this.state.modal;
                                modal.isOpen = false;
                                this.setState({
                                    modal
                                });
                            }}
                            dados={this.state.modal.dados}
                            openModal={this.openModal}
                            editarTarefa={dados => this.editarTarefa(dados)}
                        />
                    ) : null}
                </div>
            </React.Fragment>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
