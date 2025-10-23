import { useNavigate } from 'react-router'

export function EntryPage() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className='entry-container'>
      <div className='entry-content'>
        <h2>Testing Title</h2>
        <p>Published at: 21-10-2025</p>

        <img
          src='https://i.pinimg.com/1200x/29/a3/5f/29a35f173cd4af4f208348e1bbaf5532.jpg'
          alt='Testing title img'
        />

        <p className='entry-payload'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          ultricies lorem, ut aliquet justo. Nam finibus enim a ipsum rhoncus
          hendrerit. Nam placerat non urna id condimentum. Etiam ornare sed
          libero quis imperdiet. Vestibulum in vehicula odio. Nullam et volutpat
          diam, eu viverra felis. Sed molestie dui urna, a vehicula quam ornare
          in. Ut tincidunt lacinia mauris ut tincidunt. Aliquam erat volutpat.
          Phasellus et arcu gravida, condimentum urna a, egestas orci. Curabitur
          bibendum imperdiet tempor. Maecenas eget risus id sapien elementum
          aliquet. Duis a urna sed urna lacinia rutrum at ac tellus. Fusce
          feugiat eget dolor vitae semper. Aenean sagittis non diam quis
          sollicitudin. Sed venenatis nulla eget felis gravida, et luctus urna
          tempor. Maecenas et interdum mi. Integer placerat ultrices facilisis.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Fusce fringilla, lectus id eleifend dapibus,
          lorem dolor luctus neque, ac gravida urna erat at ante. Proin non
          varius dolor. Phasellus odio libero, euismod vitae quam ut, molestie
          accumsan ante. Morbi ac enim odio. Cras sit amet convallis lacus, sit
          amet pellentesque tellus. Nullam interdum vel tortor non malesuada.
          Quisque arcu sem, porta vel molestie id, interdum sit amet magna.
          Donec vehicula ipsum vitae tellus laoreet consectetur. Aenean mollis
          lorem urna, a vulputate elit facilisis at. Vestibulum nec scelerisque
          leo.
        </p>

        <div className='entry-btn-container'>
          <button>Edit</button>
          <button onClick={goHome}>Go Home</button>
        </div>
      </div>
    </div>
  )
}
