
export function getWarehouses() {
    return new Promise(resolve => {
      setTimeout(() => resolve([
        {id: 1, name: 'Warehouse 1'},
        {id: 2, name: 'Warehouse 2'},
        {id: 3, name: 'Warehouse 3'}
      ]), 2000);
    });
}