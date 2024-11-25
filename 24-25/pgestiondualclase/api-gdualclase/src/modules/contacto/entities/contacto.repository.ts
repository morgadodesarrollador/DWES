import { Repository, DataSource } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Contacto } from './contacto.entity';


@Injectable()
export class ContactoRepository extends Repository<Contacto> {
    constructor (private datasource: DataSource){
        super(Contacto, datasource.createEntityManager())
    }
    async findContactos():Promise<Contacto[]>{
        try{
            return await
                this.createQueryBuilder('Contacto')
                    .select([
                        'Contacto.nif', 'Contacto.nombre',
                    ])
                    .addSelect([
                        'Empresa.cif', 'Empresa.nombre'
                    ])
                    // .leftJoinAndSelect('Contacto.empresa', 'Empresa') // Relación OneToMany
                    .leftJoin('Contacto.empresa', 'Empresa') // Relación ManyToOne
                    .orderBy('Contacto.nombre', 'DESC')
                    .getMany();
             // .where('mainEntity.name LIKE :param', { param: `%${param}%` }) // Condición con parámetro
             // .limit(10); // Límite de resultados
    
            // return await queryBuilder.getMany(); // Ejecuta la consulta y devuelve resultados
        }catch (error){
            throw new InternalServerErrorException('Error contactos');
        }
        
    }
    

}