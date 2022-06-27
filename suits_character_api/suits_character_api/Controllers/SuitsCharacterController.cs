using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using suits_character_api.Data;

namespace suits_character_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuitsCharacterController : ControllerBase
    {
        private readonly DataContext _context;

        public SuitsCharacterController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<SuitsCharacter>>> GetSuitsCharacter()
        {
            return Ok(await _context.SuitsCharacters.ToListAsync());
            
        }
    }
}
