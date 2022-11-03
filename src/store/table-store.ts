export class Store {
  private static _selectRowFunc: any[] = []

  public subscribeSelectFuncs(id: number, func: any) {
    Store._selectRowFunc[id] = func
  }

  public unsubscribeSelectFuncs(id: number) {
    Store._selectRowFunc = Store._selectRowFunc.filter((_, index) => index !== id)
  }

  public callSelectRow(id: number) {
    Store._selectRowFunc[id]()
  }
}
