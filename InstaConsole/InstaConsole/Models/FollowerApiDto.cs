using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System;

namespace InstaConsole.Models
{
    public class FollowerApiDto : IScriptTransferDto
    {
        public string TargetAttribute { get; set; }

        public string Username { get; set; }
        public DateTime FollowedSince { get; set; }
        public DateTime UnfollowedAt { get; set; }
    }
}