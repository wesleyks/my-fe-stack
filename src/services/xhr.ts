import { Lifecycle, scoped } from "tsyringe";

@scoped(Lifecycle.ContainerScoped)
export class XhrService {
  fetch() {
    return Promise.resolve({ name: 'Foobar' });
  }
}
