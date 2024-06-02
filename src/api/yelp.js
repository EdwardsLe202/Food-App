import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer kKz2iWQPvcf27alsePuRR9SQTKyohCOh7q0nn39DRr5biLBndCgRSyrlC6s11FmzlCY3IQ0BHmb7xM7tyu7SPkkFJK4KDxNEF_WVeyF6aIIA97ZqZCykp8Z6tzlcZnYx",
  },
});
