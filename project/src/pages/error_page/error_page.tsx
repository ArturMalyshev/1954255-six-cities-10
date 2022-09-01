export default function ErrorPage(): JSX.Element {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Ошибка 404</h1>
      <p style={{textAlign: 'center'}}>Такой страницы не существует</p>
      <p style={{textAlign: 'center'}}>
        <a href={'/'}>На главную</a>
      </p>
    </div>
  );
}
