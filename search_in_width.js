const graph = {}
    graph.A= ['B', 'C']
    graph.B= ['F']
    graph.C= ['D', 'E']
    graph.D= ['F']
    graph.E= ['F']
    graph.F= ['G']

function searchInWidth(graph, start, end) {
    let arr =[]
    arr.push(start)
    while (arr.length>0) {
        const target = arr.shift()
        if(!graph[target]){
            graph[target]=[]
        }
        if(graph[target].includes(end)){
            return true
        } else {
            arr = [...arr, ...graph[target]]
        }
    }
    return false
}

console.log(searchInWidth(graph, 'A', 'G'));