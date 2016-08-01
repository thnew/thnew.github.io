using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using System.Data.Entity;
using InstaConsole.Data.Entities;

[assembly: OwinStartup(typeof(InstaConsole.Startup))]

namespace InstaConsole
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            // Configures the Database to create missing tabels
            //Database.SetInitializer(new Devtalk.EF.CodeFirst.DontDropDbJustCreateTablesIfModelChanged<InstaConsoleDbContext>());
        }
    }
}
