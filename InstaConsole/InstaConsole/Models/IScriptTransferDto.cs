using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System;

namespace InstaConsole.Models
{
    public interface IScriptTransferDto
    {
        string TargetAttribute { get; set; }
    }
}