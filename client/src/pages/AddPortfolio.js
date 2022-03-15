import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createPortfolio, deletePortfolio, getPortfolio, updatePortfolio } from 'api/portfolios'
import { Input } from 'components'
import { portfolio } from 'types/portfolio'

export const AddPortfolio = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [values, setValues] = useState(portfolio)
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      getPortfolio(id).then(setValues)
    }
  }, [id])

  useEffect(() => {
    const hasEmptyField = Object.values(values).some((field) => !String(field).trim())
    setDisabled(hasEmptyField)
  }, [values])

  const handleValueChange = (key) => {
    return (event) => {
      setValues((prev) => ({
        ...prev,
        [key]: event.target.value
      }))
    }
  }

  const handleCreateEdit = async () => {
    setLoading(true)
    if (id) {
      await updatePortfolio(id, values)
    } else {
      await createPortfolio(values)
    }
    navigate('/#portfolio')
  }

  const handleDelete = async () => {
    setLoading(true)
    await deletePortfolio(id)
    navigate('/#portfolio')
  }

  return (
    <div className='mt-4'>
      <h2 className='section-heading text-uppercase text-center'>Create Portfolio</h2>
      <div className='row align-items-stretch mb-5'>
        <div className='col-md-6 offset-3 p-4 d-grip gap-2'>
          <Input
            placeholder='Project Name *'
            value={values.projectName}
            onChange={handleValueChange('projectName')}
          />
          <Input
            placeholder='Title *'
            value={values.title}
            onChange={handleValueChange('title')}
          />
          <Input
            placeholder='Description *'
            value={values.description}
            onChange={handleValueChange('description')}
          />
          <Input
            placeholder='Image Url *'
            value={values.imageUrl}
            onChange={handleValueChange('imageUrl')}
          />
          <Input
            placeholder='Client *'
            value={values.client}
            onChange={handleValueChange('client')}
          />
          <Input
            placeholder='Category *'
            value={values.category}
            onChange={handleValueChange('category')}
          />
        </div>
        <div className='text-center'>
          <button
            className='btn btn-success btn-xl text-uppercase m-2'
            type='submit'
            onClick={handleCreateEdit}
            disabled={disabled || loading}
          >
            {id ? 'Update' : 'Create'}
          </button>
          {id && (
            <button
              className='btn btn-danger btn-xl text-uppercase m-2'
              type='submit'
              onClick={handleDelete}
              disabled={disabled || loading}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
