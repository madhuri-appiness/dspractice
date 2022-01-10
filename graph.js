class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertext(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdges(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    //DFS traversal using recursion
    depthFirstRecursive(start){
        const result =[];
        const visited={};
        const adjacencyList = this.adjacencyList
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(element => {
                if(!visited[element]) 
                return dfs(element);
            });

        })(start);
        return result;
    }


    //DFS traversal using iteration
    depthFirstIterative(start){
        let result =[], stack =[start];
        let visited={};
        let vertex;
        visited[start] = true;

        while(stack.length){
             vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(element =>{
                if(!visited[element])
                visited[element]= true;
                stack.push(element);
            })
        }
        return result;
    }

    //BFS traversal
    breadthFirst(start){
        let result=[],queue=[start];
        let visited={};
        let vertex;
        visited[start] = true;

        while(queue.length){
            vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(element=>{
                if(!visited[element])
                visited[element] = true;
                queue.push(element)
            })
        }
        return result;
    }

}