<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tarefas;
use Illuminate\Support\Facades\Redirect;

class TarefasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Tarefas::orderBy('created_at', 'desc')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $tarefa = new Tarefas;
        $tarefa->titulo = $request->input('titulo');
        $tarefa->corpo = $request->input('corpo');
        $tarefa->save();
        return $this->index();


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id)
    {
        // //
        $tarefa = Tarefas::find($id);
        $tarefa->titulo = $request->input('titulo');
        $tarefa->corpo = $request->input('corpo');
        $tarefa->save();
        return (Tarefas::orderBy('created_at', 'desc')->get());

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Tarefas::destroy($id);
        return Tarefas::all();
    }
}
