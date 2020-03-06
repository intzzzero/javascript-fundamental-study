function hanoi(n, a, b, c) { // n은 원반, a, b, c는 각각 기둥
  if (n < 1) { return; }
  hanoi(n - 1, a, c, b);
  console.log(`${n} 번째 원반: ${a} -> ${c}`);
  hanoi(n-1, b, a, c);
}

hanoi(4, 'A', 'B', 'C');