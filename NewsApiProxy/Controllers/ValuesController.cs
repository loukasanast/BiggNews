using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NewsApiProxy.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/news")]
    public class ValuesController : ApiController
    {
        [Route("{category}")]
        public IHttpActionResult Get(string category)
        {
            WebClient client = new WebClient();
            string result = client.DownloadString(new Uri($"https://newsapi.org/v2/top-headlines?country=us&category={category}&apiKey=b6a0dc13ecd344b08bd4718a7a960365"));
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result, System.Text.Encoding.UTF8, "application/json");
            return ResponseMessage(response);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}