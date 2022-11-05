import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {}

const client = axios.create(config)
console.log({ client })
