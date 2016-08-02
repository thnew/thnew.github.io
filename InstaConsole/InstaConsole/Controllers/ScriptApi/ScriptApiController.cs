using InstaConsole.Controllers.ModelBinders;
using InstaConsole.Data.Entities;
using InstaConsole.Models;
using InstaConsole.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InstaConsole.Controllers.ScriptApi
{
    public class ScriptApiController : Controller
    {
        protected override void OnException(ExceptionContext filterContext)
        {
            if (filterContext.ExceptionHandled)
            {
                return;
            }

            var result = new ViewResult
            {
                ViewName = "~/Views/ScriptApi/Error.cshtml"
            };

            result.ViewBag.ErrorMessage = filterContext.Exception.Message;

            filterContext.Result = result;
            
            filterContext.ExceptionHandled = true;
        }
    }
}
