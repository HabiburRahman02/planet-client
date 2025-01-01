import { Helmet } from 'react-helmet-async'
import AddPlantForm from '../../../components/Form/AddPlantForm'
import uploadImage from '../../../api/utils';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';

const AddPlant = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const handleAddPlant = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const image = form.image.files[0];
    const imageUrl = await uploadImage(image)
    const seller = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL
    }
    const addPlantData = {
      name, category, description, price, quantity, imageUrl, seller
    }

    axiosSecure.post('/plants', addPlantData)
      .then(data => {
        if (data.data.insertedId) {
          toast.success('Add plant success')
        }

      })

  }
  return (
    <div>
      <Helmet>
        <title>Add Plant | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddPlantForm handleAddPlant={handleAddPlant} />
    </div>
  )
}

export default AddPlant
