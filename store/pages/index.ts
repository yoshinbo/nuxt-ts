import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { store } from "~/store";
import { User, UserStatus } from "~/types";

interface IndexPageState {
  user: User | null;
}
export interface Form {
  address: string;
  password: string;
}

@Module({ dynamic: true, store, name: "IndexPage", namespaced: true })
class IndexPage extends VuexModule implements IndexPageState {
  // state
  user: User | null = null;

  // mutations
  @Mutation
  private SET_USER(user: User) {
    this.user = user;
  }

  // getters
  get name() {
    if (this.user == null) return "null";
    return this.user.name;
  }

  // actions
  @Action({})
  public fetchUser() {
    this.SET_USER({
      id: 1,
      name: "test",
      status: UserStatus.ACTIVE
    });
  }

  @Action({})
  public async login(form: Form) {
    await console.log(
      `login => address: ${form.address}, password: ${form.password}`
    );
  }
}
export default getModule(IndexPage);
