const graph = {}
graph.A= {B: 2, C: 1}
graph.B= {F: 7}
graph.C= {D: 5, E:2}
graph.D= {F: 2}
graph.E= {F: 1}
graph.F= {G: 1}
graph.G= {}

function dijkstra(graph, start, end) {
    const costs = {},
        checked = []
    let neighbors = {}
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || Infinity
        }
    })
    let node = findNodeMinCost(costs, checked)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor =>{
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        checked.push(node)
        node = findNodeMinCost(costs, checked)
    }
    return costs
}

function findNodeMinCost(costs, checked) {
    let minCost = Infinity
    let minNode
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < minCost && !checked.includes(node)) {
            minCost = cost
            minNode = node
        }
    })
    return minNode
}

console.log(dijkstra(graph, 'A', 'G'));