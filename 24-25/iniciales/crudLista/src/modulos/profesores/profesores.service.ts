import { Injectable } from '@nestjs/common';
// import * as data from './data/profesores.json';
// import data from "./data/profesores.json";

import data from "../../../public/data/profesores.json";
import { CreateProfesorDto } from './dto/create-profesor.dto';
import * as fs from 'fs-extra';
import * as path from 'path';

@Injectable()
export class ProfesoresService {
    
    //private readonly filePath = path.join(__dirname, '../../../public/data/p.json');
    private readonly ROOT_PATH = path.join(__dirname, '..','..', '..','..','public');
    private readonly filePath = path.join(this.ROOT_PATH, 'data/p.json');
    
    Lista = [];

    public async save(){
       console.log('grabando ...')
        try{
            console.log(this.ROOT_PATH)
            console.log(this.filePath)
            const datosSave = JSON.stringify(this.Lista, null, 2);
            await fs.writeFile(this.filePath, datosSave);
            return{
                msg: 'datos guardados en disco'
            }
            console.log('datos guadados en disco');
        }catch(error){
            console.error('Error ', error)
        }
    }
    public loadProfesores(){
        const filePath = path.join(this.ROOT_PATH, 'data/profesores.json');
        fs.readFile(filePath,'utf8', (err, data) => {
            if (err)
                return {
                    msg: 'error al leer el archivo:'
                }
            else {
                console.log(JSON.parse(data));
                this.Lista = JSON.parse(data);
                return {
                    msg: 'Datos leidos correctamente'
                }
            }
        })
        // console.log(data);
        // this.Lista = data;
        // return 'Profesores Cargados...'
    }

    public findAll(){
        return this.Lista;
    }

    public create(newProfesor: CreateProfesorDto){
        this.Lista.push(newProfesor); //graba en la BD de Postgress
        return {
            msg: "Registro Insertado con Éxito",
            status: 200 
        };
    }

    public getProfesorNif(nif: string){
        //saca el objeto
        const profesor = this.Lista.find((item:CreateProfesorDto) => item.nif === nif);
        if (profesor != null)
            return profesor
        else 
            return {
                msg: "Registro no Encontrado",
                status: 202 
            };
    }

    public getIndexProfesorNif(nif: string){
        console.log(nif);
        console.log (this.Lista)
        const index = this.Lista.findIndex((profesor: CreateProfesorDto) => profesor.nif === nif );
        console.log(index)
        return index
    }

    public remove (nif: string){
        const profesorEliminado = this.getProfesorNif(nif);
        if (profesorEliminado){
            this.Lista = this.Lista.filter((profesor: CreateProfesorDto) => profesor.nif !== nif);
            return {
                msg: `Profesor con nif ${nif} eliminado`,
                status: 202 
            };
        }
    }

    public update (uptProfesor: CreateProfesorDto){
        const index = this.getIndexProfesorNif(uptProfesor.nif);
        this.Lista[index] = uptProfesor
        return  ` Posicion = ${index}`
    }

}
