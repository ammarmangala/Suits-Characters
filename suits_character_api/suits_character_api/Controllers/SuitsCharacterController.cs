using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace suits_character_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuitsCharacterController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<SuitsCharacter>>> GetSuitsCharacter()
        {
            return new List<SuitsCharacter> { 
                new SuitsCharacter
                {
                    Name = "Harvey Specter",
                    FirstName = "Gabriel",
                    LastName = "Macht",
                    JobTitle = "Lawyer",
                    Company = "Pearson Spectre LLC"
                }
            };
        }
    }
}
