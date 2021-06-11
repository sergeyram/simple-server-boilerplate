import {Service} from 'typedi';
import {UsersModel} from 'src/api/models/users.model';
import {UsersRepository} from 'src/api/repositories/users.repository';
import {InjectRepository} from 'typeorm-typedi-extensions';

@Service()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel) private userRepository: UsersRepository,
  ) {}

  /**
   * Find all users
  */
  public find(): Promise<UsersModel[]> {
    return this.userRepository.find();
  }
}
