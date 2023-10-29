type Props = {
  image: string;
  name: string;
  age: number;
};

function Person({ image, name, age }: Props) {
  return (
    <article className='person'>
      <img src={image} alt='a person' />
      <div>
        <h4>{name}</h4>
        <p>{`${age} years old`}</p>
      </div>
    </article>
  );
}

export default Person;
