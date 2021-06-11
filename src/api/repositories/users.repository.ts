import {UsersModel} from 'src/api/models/users.model';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(UsersModel)
export class UsersRepository extends Repository<UsersModel> {

}
