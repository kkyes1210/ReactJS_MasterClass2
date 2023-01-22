function Home() {
  //users는 빈배열, 일부러 컴포넌트 충돌이 나도록 만들기
  const users: any = [];
  return <h1>{users[0].name}</h1>;
}

export default Home;
