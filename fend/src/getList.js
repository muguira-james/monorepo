
export function getList() {
    return fetch('http://localhost:3333/graph')
        .then(data => {
            
            return data.json();
            
        })
        // .then(data => {
        //     console.log("data ->", data);
        //     return data;
        // })
}