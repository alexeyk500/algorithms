import {Queue} from "../common/Queue";

export interface IGraph {
  [key: string]: string[];
}

interface ICandidate {
  value?: string,
  level: number
}

export const breadthFirstSearch = (graph: IGraph, root: string, condition: (val: string)=>boolean) => {
  if (condition(root)) {
    return {value: root, level: 0}
  }

  const queue = new Queue<ICandidate>();
  const checkedCandidates: string[] = [];
  let tact = 0;

  graph[root].forEach((item: string)=>queue.enqueue({value: item, level: 1}));
  let candidate: ICandidate | undefined = queue.dequeue();

  while ( candidate !== undefined) {
    tact++
    console.log('tact', tact, '- candidate:', candidate, 'queue', queue.getValues(), checkedCandidates);
    if (candidate.value && !checkedCandidates.includes(candidate.value)) {
      checkedCandidates.push(candidate.value);
      if (condition(candidate.value)) {
        return candidate
      } else {
        graph[candidate.value].forEach((item: string)=>queue.enqueue({value: item, level: candidate?.level! + 1}));
      }
    }
    candidate = queue.dequeue();
    if (tact > 10) {
      return undefined
    }
  }
  return null;
}
