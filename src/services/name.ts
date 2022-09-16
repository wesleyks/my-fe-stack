import { makeAutoObservable, runInAction } from "mobx";
import { Lifecycle, scoped } from "tsyringe";
import { XhrService } from "./xhr";

@scoped(Lifecycle.ContainerScoped)
export class NameService {
  name: string = '';

  constructor(private xhrService: XhrService) {
    makeAutoObservable(this);
  }

  async fetchName() {
    const result = await this.xhrService.fetch();
    runInAction(() => {
      this.name = result.name;
    });
  }
}