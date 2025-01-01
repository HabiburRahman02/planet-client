import { Helmet } from 'react-helmet-async'
import AddPlantForm from '../../../components/Form/AddPlantForm'
import uploadImage from '../../../api/utils';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddPlant = () => {
  const axiosSecure = useAxiosSecure();

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
    const addPlantData = {
      name, category, description, price, quantity, imageUrl
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
