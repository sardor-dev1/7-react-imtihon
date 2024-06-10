
const Cards = ({user}) => {
  return (
    <div className='card my-2'>
        <div className='card-header'>
          <h1>{user?.name}</h1>
        </div>
        <div className='card-body'>
            <img src={user?.img} alt={user.img} />
        </div>
    </div>
  )
}

export default Cards