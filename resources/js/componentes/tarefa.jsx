import React, { Component } from "react";

export default class Tarefa extends Component {
    constructor() {
        super();
    }

    render() {
        const { titulo, corpo } = this.props;
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"> {titulo}</h3>
                    </div>
                    <div className="panel-body">{corpo}</div>
                    <button
                        onClick={() => this.props.openModal()}
                        type="button"
                        className="btn btn-default"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => this.props.deleteTarefa()}
                        type="button"
                        className="btn btn-danger"
                    >
                        Deletar
                    </button>
                </div>
            </div>
        );
    }
}
