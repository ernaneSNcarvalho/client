import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/pg';

export interface ClientInstance extends Model {
    id: number;
    name: string;
}

export const Client = sequelize.define<ClientInstance>('Client', { 
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    }
},{
    tableName: 'client',
    timestamps: false
});