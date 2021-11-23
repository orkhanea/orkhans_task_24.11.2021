using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_To_BackEnd.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.bannerTitleH = "Contact Us";
            ViewBag.bannerTitleP = "Drop us Message for any Query";
            return View();
        }
    }
}