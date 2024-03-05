using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("/transactions")]
public class TransactionController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Hello, World!");
    }

    [HttpPost]
    public IActionResult Post([FromBody] string value)
    {
        if (string.IsNullOrEmpty(value))
        {
            return BadRequest("Value cannot be null or empty.");
        }

        return Ok($"Received value: {value}");
    }
}